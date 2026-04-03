import fs from 'fs';

async function main() {
  const dataModule = await import('../lib/data.js');
  const PRODUCTS = dataModule.PRODUCTS;

  let sql = '-- Add Products Data\n';
  for (const p of PRODUCTS) {
    const imagesArray = p.images || (p.image ? [p.image] : []);
    const imagesSql = `ARRAY[${imagesArray.map(img => `'${img.replace(/'/g, "''")}'`).join(', ')}]`;
    const specsJson = JSON.stringify(p.specs || {}).replace(/'/g, "''");
    const name = p.name.replace(/'/g, "''");
    const brand = p.brand.replace(/'/g, "''");
    const tagline = p.tagline ? p.tagline.replace(/'/g, "''") : '';
    const desc = p.description ? p.description.replace(/'/g, "''") : '';
    
    // Convert undefined/null to 'null' or proper SQL strings
    const badgeStr = p.badge ? `'${p.badge.replace(/'/g, "''")}'` : 'null';
    
    sql += `INSERT INTO public.products (id, name, brand, tagline, description, price, original_price, category_id, image_url, images, specs, stock, rating, review_count, is_featured, badge) `;
    sql += `VALUES (${p.id}, '${name}', '${brand}', '${tagline}', '${desc}', ${p.price}, ${p.originalPrice || 'null'}, ${p.categoryId}, '${p.image}', ${imagesSql}, '${specsJson}'::jsonb, ${p.stock}, ${p.rating}, ${p.reviewCount}, ${p.isFeatured}, ${badgeStr}) `;
    sql += `ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, price=EXCLUDED.price, image_url=EXCLUDED.image_url, stock=EXCLUDED.stock;\n`;
  }
  
  fs.writeFileSync('supabase-seed.sql', sql);
  console.log('Generated supabase-seed.sql');
}

main().catch(console.error);

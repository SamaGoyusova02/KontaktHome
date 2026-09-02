export const createSlug = (title, storage, color) => {
  const rawStr = `${title} ${storage || ''} ${color || ''}`;
  return rawStr
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') 
    .replace(/\s+/g, '-');   
};
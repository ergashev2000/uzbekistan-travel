export type BlogType = {
  id: string;
  title: string;
  description: string;
  poster: string;
  readTime: string;
  edithtml: string;
  imageTags: string;
  date: string;
  category: string;
  created_at: string;
};

export type BlogCategoryData = {
  id: string;
  name: string;
  categoryPoster: string;
  title: string;
  created_at: string;
};

export type GalleryType = {
  id: string;
  poster: string;
  title: string;
  galleryCategory: string;
  created_at: string;
};



export type GalleryCategoryType = {
  galleryName: string;
};

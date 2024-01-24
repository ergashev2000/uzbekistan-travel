import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
  query,
  where,
  DocumentData,
} from "firebase/firestore";

import {
    BlogCategoryData,
    BlogType,
  GalleryCategoryType,
  GalleryType,
} from "../types";

import { db } from "./config";
import { getStorage, ref, deleteObject } from "firebase/storage";

const storage = getStorage();

export const createDocument = async (
  collectionName: string,
  data: DocumentData
): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};

export const deleteDocument = async (
  collectionName: string,
  documentId: string
): Promise<void> => {
  const documentRef = doc(db, collectionName, documentId);
  await deleteDoc(documentRef);
};

export const updateDocument = async (
  collectionName: string,
  documentId: string,
  data: DocumentData
): Promise<void> => {
  const documentRef = doc(db, collectionName, documentId);
  await updateDoc(documentRef, data);
};

export const getAllDocuments = async (
  collectionName: string
): Promise<
  (BlogType | BlogCategoryData | GalleryType | GalleryCategoryType)[]
> => {
  const querySnapshot = await getDocs(collection(db, collectionName));

  const documents: (
    | BlogType
    | BlogCategoryData
    | GalleryType
    | GalleryCategoryType
  )[] = [];
  querySnapshot.forEach(doc => {
    documents.push({ id: doc.id, ...doc.data() } as
      | BlogType
      | BlogCategoryData
      | GalleryType
      | GalleryCategoryType);
  });

  return documents;
};

export const getDataById = async (
  collectionName: string,
  blogId: string
): Promise<BlogType | BlogCategoryData | GalleryType | undefined> => {
  const userQuery = query(
    collection(db, collectionName),
    where("__name__", "==", blogId)
  );
  const querySnapshot = await getDocs(userQuery);

  let userData: BlogType | BlogCategoryData | GalleryType | undefined;
  querySnapshot.forEach((doc: any) => {
    userData = { id: doc.id, ...doc.data() } as
      | BlogType
      | BlogCategoryData
      | GalleryType;
  });

  return userData;
};

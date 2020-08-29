import { firestore, FieldValue } from "./../../global/firebase/utils";

export const handleFetchAds = () => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("ads")
      .get()
      .then((snapshot) => {
        const ads = snapshot.docs.map((doc) => {
          return { ...doc.data(), documentID: doc.id };
        });
        resolve(ads);
      })
      .catch((err) => reject(err));
  });
};

export const handleAddAd = (ad) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("ads")
      .doc()
      .set(ad)
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};

export const handleLikeAd = (documentID) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("ads")
      .doc(documentID)
      .update({ like: FieldValue.increment(1) })
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};

export const handleCommentAd = (documentID, comment) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("ads")
      .doc(documentID)
      .update({ comments: FieldValue.arrayUnion(comment) })
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};

export const handleDeleteAd = (documentID) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("ads")
      .doc(documentID)
      .delete()
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};

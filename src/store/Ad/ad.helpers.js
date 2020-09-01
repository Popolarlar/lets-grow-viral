import { firestore, FieldValue, storage } from "./../../global/firebase/utils";

export const handleFetchAds = () => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("ads")
      .orderBy("createdDate", "desc")
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

export const handleFetchAdsByLike = () => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("ads")
      .orderBy("like", "desc")
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

export const handleFileUpload = (adFile) => {
  const timestamp = new Date();
  return new Promise((resolve, reject) => {
    storage
      .ref(`upload/${adFile.name}_${timestamp.toString()}`)
      .put(adFile)
      .then((snapshot) => snapshot.ref.getDownloadURL())
      .then((downloadURL) => {
        console.log("File available at", downloadURL);
        resolve(downloadURL);
      })
      .catch((err) => reject(err));
  });
};

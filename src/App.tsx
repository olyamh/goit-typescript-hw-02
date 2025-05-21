import React, { useEffect, useState, FormEvent } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import "./App.css";
import { fetchImages } from "./components/services/api";
import ImageGallery from "./components/imageGallery/ImageGallery";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import Loader from "./components/loader/Loader";
import ImageModal from "./components/imageModal/ImageModal";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import {ImageResult, UnsplashApiResponse} from "./types";



function App() {
  const [images, setImages] = useState<ImageResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean> (false)

  useEffect(() => {
    if (!value) {
      return;
    }

    const getData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const { results } : UnsplashApiResponse= await fetchImages(value, page);
        if (results.length === 0) {
          toast.error("Sorry, no pictures have found for your request!", {
            duration: 2500,
            position: "top-center",
            style: {
              background: "#0099ff",
              color: "white",
              fontSize: 16,
            },
          });
        }
        setImages((prev) => [...prev, ...results]);
      } catch {
        setIsError(true);
        toast.error("Hmm something went wrong. Please try later!", {
          duration: 2500,
          position: "top-center",
          style: {
            background: "#0099ff",
            color: "white",
            fontSize: 16,
          },
        });
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [value, page]);

  const handleSetValue = (newValue : string) => {
    setValue(newValue);
    setPage(1);
    setImages([]);
  };

  const handleSetPage = () => {
    setPage((prev) => prev + 1);
  };

  const openModal = (modalImage : string) : void => {
    setModalImage(modalImage);
    setModalIsOpen(true);
  };

  const closeModal = () : void => {
    setModalImage(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar handleSetValue={handleSetValue} />
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader isLoading={isLoading} />}
      {images.length > 0 && !isLoading ? (
        <LoadMoreBtn onClick={handleSetPage} />
      ) : null}
{isError && <ErrorMessage />}
      {modalIsOpen && modalImage && (
        <ImageModal
          openModal={modalIsOpen}
          modalImage={modalImage}
          isClose={closeModal}
        />
      )}
    </>
  );
}

export default App;

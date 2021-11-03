import React, { useEffect } from "react";
import FeedPhotosItem from "../FeedPhotosItem/FeedPhotosItem";
import useFetch from "../../../hooks/useFetch";
import { PHOTOS_GET } from "../../../api/api";
import Error from "../../Helper/Error/Error";
import Loading from "../../Helper/Loading/Loading";
import { PhotosUl } from "./styled";

const FeedPhotos = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request(url, options);
      console.log(json)
    };
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <PhotosUl className="leftAnimation">
        {data.map((photo) => (
            <FeedPhotosItem key={photo.id} photo={photo}/>
        ))}
      </PhotosUl>
    );
  else return null;
};

export default FeedPhotos;

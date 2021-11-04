import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PhotoContentDiv } from "./styled";
import { H1Element } from "../../Components/Titles/H1/H1";
import PhotoComments from "../PhotoComments/PhotoComments";
import { UserContext } from "../../context/useContext";
import PhotoDelete from "../PhotoDelete/PhotoDelete";

const PhotoContent = ({ data }) => {
  const user = useContext(UserContext);
  const { photo, comments } = data;
  return (
    <PhotoContentDiv>
      <div className="img">
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className="details">
        <div>
          <p className="author">
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id}/>
            ) : (
              <Link to={`/profile/${photo.id}`}>@{photo.author}</Link>
            )}
            <span className="views">{photo.acessos}</span>
          </p>
          <H1Element>
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </H1Element>
          <ul className="attributes">
            <li>{photo.peso} KG</li>
            <li>
              {photo.idade > 1 ? `${photo.idade} Anos` : `${photo.idade} Ano`}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </PhotoContentDiv>
  );
};

export default PhotoContent;

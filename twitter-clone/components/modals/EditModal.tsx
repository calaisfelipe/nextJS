"use client";
import React, { useCallback, useState, useEffect } from "react";
import useEditModal from "@/hooks/useEditModal";
import Input from "../Input";
import Modal from "../Modal";
import useCurrentUser from "@/hooks/useCurrentUser";
import { toast } from "react-hot-toast";
import axios from "axios";
import ImageUpload from "../ImageUpload";

type RequestType = {
  name: string;
  username: string;
  profileImage: string;
  coverImage: string;
  bio: string;
};

const EditModal = ({ user, mutate }: { user: any; mutate: any }) => {
  const editModal = useEditModal();
  const [name, setName] = useState(user?.name);
  const [username, setUsername] = useState(user?.username);
  const [profileImage, setProfileImage] = useState(user?.profileImage);
  const [coverImage, setCoverImage] = useState(user?.coverImage);
  const [bio, setBio] = useState(user?.bio);

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      await axios
        .patch("/api/edit", {
          id: user?.id,
          name,
          username,
          profileImage,
          coverImage,
          bio,
        })
        .then((res) => {
          if (res.status === 200) {
            toast.success("Profile Edited");
          }
        })
        .catch((error) => toast.error("Failed to edit"));

      mutate();

      editModal.onClose();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [
    bio,
    name,
    username,
    profileImage,
    coverImage,
    mutate,
    editModal,
    user?.id,
  ]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <ImageUpload
        name="profileImage"
        value={profileImage}
        disabled={isLoading}
        onChange={(image) => setProfileImage(image)}
        label="Upload profile image"
      />
      <ImageUpload
        name="coverImage"
        value={coverImage}
        disabled={isLoading}
        onChange={(image) => setCoverImage(image)}
        label="Upload cover image"
      />
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="text"
        value={bio}
        placeholder="Bio"
        onChange={(e) => setBio(e.target.value)}
      />
    </div>
  );

  const footerContent = <div></div>;

  return (
    <>
      <Modal
        disabled={isLoading}
        isOpen={editModal.isOpen}
        title="Edit your Profile"
        actionLabel="Edit"
        onClose={editModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
      />
    </>
  );
};

export default EditModal;

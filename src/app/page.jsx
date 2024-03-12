
"use client";
import { Form } from "@/components/Form";
import { Modal } from "@/components/Modal";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",

  });

  function openModal(data) {
    setIsModalOpen(true);
    setFormData(data);
  }



  function closeModal() {
    setIsModalOpen(false);
  }

 

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <Form openModal={openModal} setFormData={setFormData} />
      {isModalOpen && <Modal onClose={closeModal} data={formData}   />}
    </div>
  );
}

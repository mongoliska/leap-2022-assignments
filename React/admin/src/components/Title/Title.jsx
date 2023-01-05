import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { SlPlus } from "react-icons/sl";
import Form from 'react-bootstrap/Form';

export default function Title ({title, handleShow}){

    return (
      <>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h1>Blog posts</h1>
        </div>
        <div>
          <Button size="sm" variant='primary' onClick={handleShow}>Create <SlPlus />
          </Button>
        </div>
        </div>
      </>
        
    );
}
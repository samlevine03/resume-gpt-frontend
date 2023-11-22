import React from 'react';
import { BlobProvider } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF'; // Your ResumePDF component

const ResumePreview = ({ formData }) => (
  <BlobProvider document={<ResumePDF formData={formData} />}>
    {({ blob, url, loading, error }) => {
      if (loading) {
        return <div>Loading PDF...</div>;
      }
      if (error) {
        return <div>Something went wrong while loading the PDF!</div>;
      }
      return <iframe src={url} style={{ width: '100%', height: '500px' }} />;
    }}
  </BlobProvider>
);

export default ResumePreview;

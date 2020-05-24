import fetch from 'isomorphic-fetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@material-ui/core';

const ViewIndex = ({ blade, deleteUrl, pushUrl }) => {
  const router = useRouter();

  const deleteBlade = async () => {
    const bladeId = router.query.id;
    try {
      const deleted = await fetch(`${deleteUrl}/${bladeId}`, {
        method: 'DELETE',
      });
      router.push(pushUrl);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      delete
      <h1>{blade.serial}</h1>
      <Button onClick={deleteBlade} variant="contained" color="primary">
        Delete
      </Button>
    </div>
  );
};

export default ViewIndex;

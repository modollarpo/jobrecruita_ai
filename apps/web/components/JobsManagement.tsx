// Jobs Management main component
import { Table } from './Table';
import { Button } from './Button';
import { Modal } from '../../shared/components/Modal';
import { useState } from 'react';

export function JobsManagement() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="p-8 space-y-8 bg-white dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Jobs Management</h1>
      <Button onClick={() => setShowModal(true)}>Post Job</Button>
      <Table columns={["Title", "Company", "Status", "Actions"]} data={[]} />
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <>{/* Job form goes here */}</>
      </Modal>
    </div>
  );
}

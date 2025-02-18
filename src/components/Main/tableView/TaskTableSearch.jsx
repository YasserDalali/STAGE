import React from 'react';

const TaskTableSearch = ({ table }) => {
  return (
    <div className="p-4 bg-gray-50 border-b border-gray-200">
      <input
        type="text"
        value={table.getState().globalFilter ?? ""}
        onChange={(e) => table.setGlobalFilter(e.target.value)}
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        placeholder="Search tasks..."
      />
    </div>
  );
}

export default TaskTableSearch;

import { useState } from 'react';

function RoleToggle({ onChange ,onLoginCLose,onAdminClose}) {
  const [role, setRole] = useState('user');

  const handleToggle = (selectedRole) => {
    setRole(selectedRole);
    if (onChange) onChange(selectedRole);
  };

  return (
    <div className="inline-flex bg-gray-50 rounded-lg p-0.5 shadow-md">
      <button
        onClick={() => {handleToggle('user')
           if (onLoginCLose) onLoginCLose();
        }}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ease-in-out cursor-pointer
          ${role === 'user' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}`}
      >
        👨‍🎓 User
      </button>
      <button
        onClick={() => {
          handleToggle('admin')
          if (onAdminClose) onAdminClose();
        }}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ease-in-out cursor-pointer
          ${role === 'admin' ? 'bg-green-600 text-white shadow-sm' : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'}`}
      >
        🏫 Admin
      </button>
    </div>
  );
}

export default RoleToggle;
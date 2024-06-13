import React, { useEffect } from 'react';
import { BiLogoBlogger, BiMenuAltLeft } from 'react-icons/bi';
import { BsListNested, BsReverseListColumnsReverse } from 'react-icons/bs';
import { FaCar } from 'react-icons/fa';
import { HiOutlinePower, HiUsers } from 'react-icons/hi2';
import { MdWindow } from 'react-icons/md';
import { PiPowerBold, PiUsersFill } from 'react-icons/pi';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import useCheckRole from '../hooks/useCheckRole';

const AdminLayout = () => {
  const role = useCheckRole();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('User role:', role); // Log the role to the console
    if (role != 'ADMIN') {
      navigate('/');
    }
  }, [role]);

  useEffect(() => {
    document.body.classList.add('bg-bodyBgColor/[.1]');

    return () => {
      document.body.classList.remove('bg-bodyBgColor/[.1]');
    };
  }, []);

  return (
    <>
      <section className="fixed left-0 top-0 bottom-0 bg-white flex items-center border-r-[1px] border-[#ccc]/[.8] z-10">
        <div className="flex flex-col">
          <NavLink
            to={'/#'}
            className={({ isActive }) =>
              `px-[20px] py-[14px] cursor-pointer  ${
                isActive
                  ? 'text-[#4379EE] border-l-[4px] border-[#4379EE]'
                  : 'hover:bg-[#f5f5f5] text-mainTitleColor/[.4] hover:text-mainTitleColor'
              }`
            }
          >
            <BsListNested className="block h-5 w-5" />
          </NavLink>

          <NavLink
            to="/admin"
            replace
            end
            className={({ isActive }) =>
              `px-[20px] py-[14px] cursor-pointer  ${
                isActive
                  ? 'text-[#4379EE] border-l-[4px] border-[#4379EE]'
                  : 'hover:bg-[#f5f5f5] text-mainTitleColor/[.4] hover:text-mainTitleColor'
              }`
            }
          >
            <MdWindow className="block h-5 w-5" />
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-[20px] py-[14px] cursor-pointer  ${
                isActive
                  ? 'text-[#4379EE] border-l-[4px] border-[#4379EE]'
                  : 'hover:bg-[#f5f5f5] text-mainTitleColor/[.4] hover:text-mainTitleColor'
              }`
            }
          >
            <FaCar className="block h-5 w-5" />
          </NavLink>

          <NavLink
            to="/admin/blog"
            className={({ isActive }) =>
              `px-[20px] py-[14px] cursor-pointer  ${
                isActive
                  ? 'text-[#4379EE] border-l-[4px] border-[#4379EE]'
                  : 'hover:bg-[#f5f5f5] text-mainTitleColor/[.4] hover:text-mainTitleColor'
              }`
            }
          >
            <BiLogoBlogger className="block h-5 w-5" />
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-[20px] py-[14px] cursor-pointer  ${
                isActive
                  ? 'text-[#4379EE] border-l-[4px] border-[#4379EE]'
                  : 'hover:bg-[#f5f5f5] text-mainTitleColor/[.4] hover:text-mainTitleColor'
              }`
            }
          >
            <HiUsers className="block h-5 w-5" />
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-[20px] py-[14px] cursor-pointer  ${
                isActive
                  ? 'text-[#4379EE] border-l-[4px] border-[#4379EE]'
                  : 'hover:bg-[#f5f5f5] text-mainTitleColor/[.4] hover:text-mainTitleColor'
              }`
            }
          >
            <PiPowerBold className="block h-5 w-5" />
          </NavLink>
        </div>
      </section>

      <section className="fixed top-0 right-0 left-0 bg-white border-b-[1px] border-[#ccc]/[.8] py-1">
        <div className="container">
          <div className="flex">
            <img src="/imgs/logo-toyota.jpg" alt="logo-toyota" />
          </div>
        </div>
      </section>

      <div className="mt-sectionMargin_1 container">
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;

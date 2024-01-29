import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const ProfileImg = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;

    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
`;

const DropdownMenu = styled.div`
    position: absolute;
    z-index: 10;
    background-color: white;
    border: 0px;
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.25);
    width: 160px;
    right: calc((100% - 1280px) / 2 + 10px);
    top: 70px;

    @media screen and (max-width: 1280px) {
        right: 10px;
    }
`;

const MenuList = styled.ul`
    list-style-type: none;
    padding: 0px;

    color: #374151;
    margin: 0px;
`;

const MenuItem = styled.li`
    cursor: pointer;
    height: calc(60px - 20px);
    padding: 10px;

    color: #000000;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 40px;

    &:hover {
        background-color: #78b3ff;
        color: #ffffff;
    }
`;

function HeaderMenu({imgUrl}) {
    const [isDropdown, setIsDropdown] = useState(false);

    const toggleDropdown = () => {
        setIsDropdown((currentState) => !currentState);
    };

    const closeDropdown = (event) => {
        if (isDropdown) {
            if (isDropdown) {
                const dropdown = document.getElementById('userDropdown');
                if (dropdown && !dropdown.contains(event.target)) {
                    setIsDropdown(false);
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', closeDropdown);
        if (isDropdown) {
            window.addEventListener('click', closeDropdown);
        } else {
            window.removeEventListener('click', closeDropdown);
        }
        return () => {
            window.removeEventListener('click', closeDropdown);
            window.removeEventListener('scroll', closeDropdown);
        };
    }, [isDropdown]);

    const handleImgClick = (event) => {
        event.stopPropagation();
        toggleDropdown();
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logout = async () => {
        dispatch({ type: 'user/RESET_USER_DATA' });
        navigate('/');
    };

    const data = useSelector((state) => state.user);

    const handleMailbox = () => {
        const id = data.data.memberId;
        navigate(`/mailbox/${id}`);
    };

    const handleDescription = () => {
        window.alert("추후 노션 연결 예정");
    }

    return (
        <div>
            <ProfileImg src={imgUrl} onClick={handleImgClick}></ProfileImg>

            {isDropdown && (
                <DropdownMenu id="userDropdown">
                    <MenuList>
                        <MenuItem href="" onClick={handleMailbox}>
                            내 편지함
                        </MenuItem>
                        <MenuItem href="" onClick={handleDescription}>
                            코레터 소개
                        </MenuItem>
                        <MenuItem href="" onClick={logout}>
                            로그아웃
                        </MenuItem>
                    </MenuList>
                </DropdownMenu>
            )}
        </div>
    );
}

export default HeaderMenu;
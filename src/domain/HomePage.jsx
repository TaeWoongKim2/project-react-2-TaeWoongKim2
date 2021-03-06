import React from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { playMenuPicker } from 'slice';

import { get, getRandomSomethingPicker } from 'utils/common';

import styled from '@emotion/styled';


const HomeSection = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeContent = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  & > h1 {
    margin: 0 0 10px;
    font-size: 48px;
    animation: animateleft 0.4s;
    @media all and (max-width: 767px) {
      font-size: 36px;
    }
  };
  & > hr {
    margin: auto;
    width: 66%;
    border: 0;
    border-top: 2px solid #eee;
  };
  & > button {
    color: #eee;
    font-size: 18px;
    height: 48px;
    width: 180px;
    line-height: 48px;
    margin: 25px 25px;
    text-align: center;
    border: 1px solid #eee;
    transition: all 0.3s ease 0s;
    background: #fff0;
    margin: 1em 0 0;
    &:hover {
      background: #6b8754;
      cursor: pointer;
    };
  };
  & > a {
    text-align: center;
    font-size: 18px;
    margin: 1em 0 0;
    cursor: pointer;
    &:hover {
      text-decoration-line: underline;
    };
  };
`;

export default function HomePage() {
  const dispatch = useDispatch();

  const history = useHistory();

  const menus = useSelector(get('foods'));
  const maxims = useSelector(get('foodMaxims'));

  function handleMenuPickerClick() {
    const pickedMenu = getRandomSomethingPicker(menus);
    const pickedMaxim = getRandomSomethingPicker(maxims);

    dispatch(playMenuPicker(
      { food: pickedMenu, foodMaxim: pickedMaxim },
    ));

    history.push('/menu');
  }

  function handleMenuListClick() {
    history.push('/menus');
  }

  return (
    <HomeSection>
      <HomeContent>
        <h1>오늘 뭐 먹지?!</h1>
        <hr />
        <button type="button" onClick={handleMenuPickerClick}>메뉴 뽑기</button>
        <button type="button" onClick={handleMenuListClick}>메뉴판 보기</button>
      </HomeContent>
    </HomeSection>
  );
}

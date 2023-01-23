import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import reactLogo from './assets/react.svg';
import './App.css';

const Button: React.FC<any> = styled.button`
  height: 46px;
  border: 2px solid #aaa;
  border-radius: 0px 20px 20px 0px;
  border-left: none;
  color: white;
  font-size: 18px;
  font-weight: bold;
  background: #1c555d;

  &:hover {
    outline: none;
    border: 2px solid #aaa;
    border-left: none;
    background: #164046;
  }
  &:active {
    outline: none;
    border: 2px solid #aaa;
    border-left: none;
    background: #0e3034;
  }
  &:focus {
    outline: none;
    border: 2px solid #aaa;
    border-left: none;
  }

  ${(props: any) =>
    props.valid === true &&
    css`
      background-color: #338146;
    `}

  ${(props: any) =>
    props.valid === false &&
    css`
      background-color: #a6394d;
    `}
`;

const Kana = styled.div`
  font-size: 104px;
  color: white;
  height: 10vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10vh;
  margin: 0;
  padding-inline: 20px;
  padding-block: 60px 20px;;
  background-color: #234;
  border-radius: 32px;
`;

const Input: React.FC<any> = styled.input`
  font-size: 24px;
  border: 2px solid #aaa;
  border-radius: 20px 0px 0px 20px;
  border-right: none;
  height: 40px;
  text-align: center;
  background: #286871;
  outline: none;
  color: white;
  width: 50vw;
  max-width: 250px;

  ${(props: any) =>
    props.valid === true &&
    css`
      background-color: #338146;
    `}

  ${(props: any) =>
    props.valid === false &&
    css`
      background-color: #a6394d;
    `}
`;

const Form = styled.form`
  display: flex;
  outline: none;
`;

const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;

function App() {
  const [currentKana, setCurrentKana] = useState<keyof typeof kanas>('a');
  const [input, setInput] = useState('');
  const [valid, setValid] = useState<boolean | undefined>(undefined);

  const kanas = {
    a: 'あ',
    i: 'い',
    u: 'う',
    e: 'え',
    o: 'お',
    ka: 'か',
    ki: 'き',
    ku: 'く',
    ke: 'け',
    ko: 'こ',
    sa: ' さ',
    shi: 'し',
    su: 'す',
    se: 'せ',
    so: 'そ',
    ta: ' た',
    chi: 'ち',
    tsu: 'つ',
    te: 'て',
    to: 'と',
    na: 'な',
    ni: 'に',
    nu: 'ぬ',
    ne: 'ね',
    no: 'の',
    ha: 'は',
    hi: 'ひ',
    fu: 'ふ',
    he: 'へ',
    ho: 'ほ',
    ma: 'ま',
    mi: 'み',
    mu: 'む',
    me: 'め',
    mo: 'も',
    ya: 'や',
    yu: 'ゆ',
    yo: 'よ',
    ra: 'ら',
    ri: 'り',
    ru: 'る',
    re: 'れ',
    ro: 'ろ',
    wa: 'わ',
    wo: 'を',
    n: 'ん',
  };

  const nextKana = () => {
    const keys = getKeys(kanas);
    const next = Math.floor(Math.random() * keys.length);

    setCurrentKana(keys[next]);
    setInput('');
    setValid(undefined);
  };

  useEffect(() => {
    nextKana();
  }, []);

  const handleSubmit: React.EventHandler<React.FormEvent> = (e) => {
    e.preventDefault();

    setValid(input === currentKana);

    setTimeout(nextKana, 2000);
  };

  return (
    <Wrapper className="App">
      <Kana>
        {kanas[currentKana]}
      </Kana>
      <Kana>{typeof valid === 'boolean' && currentKana}</Kana>
      <Form name="kana" onSubmit={handleSubmit} className="input">
        <Input
          valid={valid}
          autoComplete="off"
          type="text"
          name="romaji"
          value={input}
          onChange={(e: any) => setInput(e.target.value)}
        />
        <Button valid={valid} type="submit">
          Check
        </Button>
      </Form>
    </Wrapper>
  );
}

export default App;

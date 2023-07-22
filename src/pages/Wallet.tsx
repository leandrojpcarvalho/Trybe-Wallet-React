import { useState } from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';
import { FORM_INITIAL_STATE } from '../utils';
import { Test } from '../context/test';

function Wallet() {
  const [form, setForm] = useState(FORM_INITIAL_STATE);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Test.Provider value={ { form, setForm, isEditing, setIsEditing } }>
      <>
        <div>
          <Header />
          <h2>algumacoisa daquia pouco</h2>
        </div>
        <main>
          <WalletForm />
          <Table />
        </main>
      </>
    </Test.Provider>
  );
}

export default Wallet;

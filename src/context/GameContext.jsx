// =====================================================
// GameContext.jsx
// =====================================================

import {
  createContext,
  useContext,
  useState,
  useEffect,
}
from "react";

// =====================================================

const GameContext =
  createContext();

// =====================================================

export function GameProvider({
  children,
}) {

  // ===================================================
  // SAVES
  // ===================================================

  const [saves, setSaves] =
    useState(() => {

      const saved =
        localStorage.getItem(
          "saves"
        );

      return saved
        ? JSON.parse(saved)
        : [];
    });

  // ===================================================
  // ACTIVE SAVE ID
  // ===================================================

  const [activeSaveId, setActiveSaveId] =
    useState(() => {

      return localStorage.getItem(
        "activeSaveId"
      );
    });

  // ===================================================
  // ACTIVE SAVE
  // ===================================================

  const activeSave =
    saves.find(
      save =>
        save.id === activeSaveId
    ) || null;

  // ===================================================
  // SAVE LOCAL STORAGE
  // ===================================================

  useEffect(() => {

    localStorage.setItem(
      "saves",
      JSON.stringify(saves)
    );

  }, [saves]);

  // ===================================================
  // SAVE ACTIVE ID
  // ===================================================

  useEffect(() => {

    if (activeSaveId) {

      localStorage.setItem(
        "activeSaveId",
        activeSaveId
      );

    } else {

      localStorage.removeItem(
        "activeSaveId"
      );
    }

  }, [activeSaveId]);

  // ===================================================
  // CREATE SAVE
  // ===================================================

  const createSave = (
    newSave
  ) => {

    const saveWithId = {

      ...newSave,

      id:
        crypto.randomUUID(),

      createdAt:
        Date.now(),
    };

    setSaves(prev => [
      ...prev,
      saveWithId,
    ]);

    setActiveSaveId(
      saveWithId.id
    );

    return saveWithId;
  };

  // ===================================================
  // LOAD SAVE
  // ===================================================

  const loadSave = (id) => {

    setActiveSaveId(id);
  };

  // ===================================================
  // DELETE SAVE
  // ===================================================

  const deleteSave = (id) => {

    setSaves(prev =>
      prev.filter(
        save => save.id !== id
      )
    );

    if (activeSaveId === id) {

      setActiveSaveId(null);
    }
  };

  // ===================================================
  // PROVIDER
  // ===================================================

  return (

    <GameContext.Provider
      value={{

        saves,
        setSaves,

        activeSave,
        activeSaveId,
        setActiveSaveId,

        createSave,
        loadSave,
        deleteSave,
      }}
    >

      {children}

    </GameContext.Provider>
  );
}

// =====================================================

export function useGame() {

  return useContext(
    GameContext
  );
}
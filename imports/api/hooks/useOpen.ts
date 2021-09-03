import { useEffect, useState } from 'react';

type Open<T> = T | Record<string, never> | null;

function useOpen<T>(open: Open<T>, close: () => void): [ boolean, () => void ] {
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      setOpen(true);
    }
  }, [open]);

  const clear = () => {
    setOpen(false);
    close();
  };

  return [isOpen, clear];
}

export default useOpen;

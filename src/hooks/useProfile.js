import { useMemo } from 'react';
import { PROFILE } from '../data/profile';

export default function useProfile() {
  const firstName = useMemo(() => PROFILE.fullName.split(' ')[0], []);

  const rows = useMemo(
    () => [
      { key: 'name', label: 'Nombre completo', value: PROFILE.fullName },
      { key: 'id', label: 'Carnet', value: PROFILE.studentId },
      { key: 'group', label: 'Sección y grupo', value: PROFILE.sectionGroup },
    ],
    []
  );

  return { firstName, rows };
}

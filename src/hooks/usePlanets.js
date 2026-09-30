import { useMemo, useState } from 'react';
import useRequest from './useRequest';

const ENDPOINT = 'https://dragonball-api.com/api/planets?limit=30';

export default function usePlanets() {
  const { response, isLoading, isError, message, reload } = useRequest(ENDPOINT);
  const [filter, setFilter] = useState('all');

  const allPlanets = useMemo(() => {
    const list = Array.isArray(response) ? response : response?.items ?? [];
    return list.map((planet) => ({
      id: String(planet.id),
      name: planet.name,
      image: planet.image ?? null,
      description: planet.description?.trim() || 'Este planeta no tiene descripción registrada.',
      destroyed: Boolean(planet.isDestroyed),
    }));
  }, [response]);

  const filters = useMemo(
    () => [
      { key: 'all', label: 'Todos', count: allPlanets.length },
      { key: 'alive', label: 'En pie', count: allPlanets.filter((p) => !p.destroyed).length },
      { key: 'destroyed', label: 'Destruidos', count: allPlanets.filter((p) => p.destroyed).length },
    ],
    [allPlanets]
  );

  const planets = useMemo(() => {
    if (filter === 'alive') return allPlanets.filter((p) => !p.destroyed);
    if (filter === 'destroyed') return allPlanets.filter((p) => p.destroyed);
    return allPlanets;
  }, [allPlanets, filter]);

  return { planets, filters, filter, setFilter, isLoading, isError, message, reload };
}

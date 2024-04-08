'use server';

import { envs } from '@/configs/envs';

export const getTodos = async () => {
  try {
    const resp = await fetch(`${envs.API_URL}/todos`);

    return await resp.json();
  } catch (err) {
    console.log(err);
  }
}

export const updateTodo = async (id: string) => {
  try {
    const resp = await fetch(`envs.API_URL/todos/${id}`, {
      method: 'PATCH'
    });

    return await resp.json();
  } catch (err) {
    console.log(err);
  }
}

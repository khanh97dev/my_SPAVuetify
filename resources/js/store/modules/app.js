export const state = {
  sidebar: false,
}

export const mutations = {
  sidebar: (state, show) => {
      if(show) localStorage.setItem('sidebar', 1);
      else localStorage.removeItem('sidebar');
      state.sidebar = show;
  }
}
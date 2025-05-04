
### deployment link
https://countriesapp-mu.vercel.app/

### Technologies Used
- React.js
- Tailwind CSS
- Vite
- React Router
- Framer Motion
- deployed in vercel

### Hooks Used
- `useState`: To manage component state.
- `useEffect`: To handle side effects like fetching data.
- `useMemo`: To optimize performance by memoizing filtered data.
- `useCallback`: To memoize functions and prevent unnecessary re-renders.
- `useNavigate`: For navigation between pages.
- `useParams` : To get parameter data from URL

### Responsiveness Management
- Tailwind CSS was used extensively to ensure responsiveness. Classes like `sm:`, `md:`, and `lg:` were applied to adjust layouts and styles for different screen sizes.
- Flexbox and Grid layouts were utilized to create adaptive designs.

### Smooth Animations
- Framer Motion was used to implement smooth animations and transitions. For example, animations for page transitions, hover effects, and interactive elements were created using `motion.div` and `motion.img` components.

### Custom Hook for Fetching Countries
- A custom hook, `useCountries`, was created to fetch and manage country data. This hook encapsulates the logic for API calls and state management, making it reusable and clean.

### Using `useMemo` for Filtering with Performance
- The `useMemo` hook was used to optimize the filtering of countries. By memoizing the filtered results, unnecessary computations were avoided, improving the app's performance, especially when dealing with large datasets.

import { ThemeProvider } from './ThemeContext';
import ThemedLayout from './ThemedLayout';

function Dashboard() {
  return (
    <ThemeProvider>
      <ThemedLayout />
    </ThemeProvider>
  );
}

export default Dashboard;

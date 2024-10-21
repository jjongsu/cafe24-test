import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient';

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div>home page!!!</div>
        </QueryClientProvider>
    );
}

export default App;

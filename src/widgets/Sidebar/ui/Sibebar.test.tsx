import { fireEvent, render, screen } from '@testing-library/react';

import { Sidebar } from '@/widgets';

describe('Sidebar', () => {
    it('should be in dom', () => {
        render(<Sidebar>Test</Sidebar>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    it('should be open by default', () => {
        render(<Sidebar>Test</Sidebar>);
        expect(screen.getByText('Test')).toHaveAttribute('aria-expanded', 'true');
    });
    it('should toggle', () => {
        render(<Sidebar>Test</Sidebar>);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByText('Test')).toHaveAttribute('aria-expanded', 'false');
    });
});
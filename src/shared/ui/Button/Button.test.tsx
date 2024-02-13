import { render, screen } from '@testing-library/react';

import { Button } from '@/shared/ui';

describe('Button', () => {
    it('with only string as child', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    it('should have a target=_blank if pass href attr', () => {
        render(<Button href='google.com'>Test</Button>);
        expect(screen.getByText('Test')).toHaveAttribute('target', '_blank');
    });
});
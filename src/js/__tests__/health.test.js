import getHealthStatus from '../health';

describe('getHealthStatus', () => {
    test('should return "healthy" when health > 50', () => {
        const character = { name: 'Маг', health: 90 };
        expect(getHealthStatus(character)).toBe('healthy');
    });

    test('should return "healthy" when health is 51', () => {
        const character = { name: 'Маг', health: 51 };
        expect(getHealthStatus(character)).toBe('healthy');
    });

    test('should return "wounded" when health is 50', () => {
        const character = { name: 'Маг', health: 50 };
        expect(getHealthStatus(character)).toBe('wounded');
    });

    test('should return "wounded" when health is between 15 and 50', () => {
        const character = { name: 'Маг', health: 30 };
        expect(getHealthStatus(character)).toBe('wounded');
    });

    test('should return "wounded" when health is 15', () => {
        const character = { name: 'Маг', health: 15 };
        expect(getHealthStatus(character)).toBe('wounded');
    });

    test('should return "critical" when health is 14', () => {
        const character = { name: 'Маг', health: 14 };
        expect(getHealthStatus(character)).toBe('critical');
    });

    test('should return "critical" when health < 15', () => {
        const character = { name: 'Маг', health: 10 };
        expect(getHealthStatus(character)).toBe('critical');
    });

    test('should return "critical" when health is 0', () => {
        const character = { name: 'Маг', health: 0 };
        expect(getHealthStatus(character)).toBe('critical');
    });
});

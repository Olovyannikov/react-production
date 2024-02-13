import type { JestConfigWithTsJest } from 'ts-jest';
import path from 'path';

const jestConfig: JestConfigWithTsJest = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.(t|j)sx?$': '@swc/jest',
    },
    runtime: '@side/jest-runtime',
    clearMocks: true,
    testEnvironment: 'jsdom',
    rootDir: '../../',
    coveragePathIgnorePatterns: ['/node_modules/'],
    moduleDirectories: ['node_modules', 'src'],
    modulePaths: [
        '<rootDir>src',
    ],
    testMatch: [`<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)`],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTest.ts'],
    transformIgnorePatterns: ['/node_modules/(?!(@hookform.*|uuid|lodash-es|@babel/runtime)/)'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },
};

export default jestConfig;
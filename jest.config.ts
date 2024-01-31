import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  rootDir: 'src',
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  setupFiles: ['<rootDir>/../jest.polyfills.ts', '<rootDir>/test/setupEnv.ts'],
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  moduleNameMapper: {
    '^src/(.+)$': '<rootDir>/$1',
    '^@/(.*)$': '<rootDir>/$1',
    uuid: require.resolve('uuid'),
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};

export default config;

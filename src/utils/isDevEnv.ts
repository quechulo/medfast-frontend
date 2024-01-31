const isDevEnv = (): boolean => process.env.NODE_ENV === 'development';

export default isDevEnv;

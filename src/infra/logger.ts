import pino from 'pino'

const prettyLogIsEnabled = ((): boolean => {
  if (process.env.NODE_ENV !== 'development') {
    return false
  }
  try {
    return !(require.resolve('pino-pretty').length === 0) && true
  } catch {
    return false
  }
})()

const rootLogger = pino({
  name: 'back-lizardium-api',
  level: (process.env.LOG_LEVEL ?? 'info').toLowerCase(),
  base: {
    version: process.env.APP_VERSION ?? 'unknown'
  },
  serializers: {
    error: pino.stdSerializers.err
  },
  formatters: {
    level(label) {
      return { level: label.toUpperCase() }
    }
  },
  ...(prettyLogIsEnabled
    ? {
        transport: {
          target: 'pino-pretty'
        }
      }
    : {})
})

export { rootLogger }

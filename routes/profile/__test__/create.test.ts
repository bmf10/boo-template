/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import request from 'supertest'
import { app, server } from '../../../app'

describe('POST /profile', () => {
  afterEach(() => {
    if (server && server.listening) {
      server.close()
    }
    jest.resetModules()
  }, 10000)

  it('should create a new profile and return 200 status', async () => {
    const newProfile = {
      name: 'Test Name',
      description: 'Test Description',
      image: 'Test Image',
      mbti: 'INTJ',
      enneagram: '2w3',
      zodiac: 'Aries',
      variant: 'Test Variant',
      tritype: 123,
      socionics: 'Test Socionics',
      sloan: 'Test Sloan',
      psyche: 'Test Psyche',
    }

    const res = await request(app).post('/profile').send(newProfile)

    expect(res.statusCode).toEqual(200)
    expect(res.body.data).toHaveProperty('name')
    expect(res.body.data).toHaveProperty('description')
    expect(res.body.data).toHaveProperty('image')
    expect(res.body.data).toHaveProperty('mbti')
    expect(res.body.data).toHaveProperty('enneagram')
    expect(res.body.data).toHaveProperty('zodiac')
    expect(res.body.data).toHaveProperty('variant')
    expect(res.body.data).toHaveProperty('tritype')
    expect(res.body.data).toHaveProperty('socionics')
    expect(res.body.data).toHaveProperty('sloan')
    expect(res.body.data).toHaveProperty('psyche')
  })
})

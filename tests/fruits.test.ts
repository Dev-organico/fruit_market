import app from "index";
import supertest from "supertest";

const api = supertest(app)

describe('testando a API', () => {

    it('testing GET: /fruits',async ()=>{

        const result = await api.get('fruits')

        expect(result).toEqual([])

    })

    it('testing GET: /fruits/:id',async ()=>{

        const result = await api.get('fruits/:id')

        expect(result).toEqual({
            id: expect.any(Number),
            name: expect.any(String),
            price: expect.any(Number)
        })

    })

    it('should respond with status 404 if there is no fruit',async ()=>{

        const result = await api.get('fruits/:id')

        expect(result.status).toBe(404)

    })

    it('testing POST: /fruits',async ()=>{

        const result = await api.post('fruits')

        expect(result.status).toBe(201)

    })

    it('should respond with status 409 if name alrealdy exists',async ()=>{

        const result = await api.post('fruits')

        expect(result.status).toBe(409)

    })
}
)
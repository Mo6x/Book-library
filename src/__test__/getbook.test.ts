import supertest from 'supertest'
import {app} from '../app'


describe('book', ()=>{
    describe('get book', ()=>{
        describe('given the book does not exist', ()=>{
            it('should return 404', ()=>{
                expect(true).toBe(true)
            })
        })
    })
})
import { test, expect } from "@playwright/test"

test('API GET request', async({request}) => {
    const response = await request.get('https://reqres.in/api/users/2')

    expect(response.status()).toBe(200)
    
    const responseText = await response.text()
    expect(responseText).toContain('Janet')
    
    console.log(await response.json())
})

test('API POST request', async({request}) => {
    const response = await request.post('https://reqres.in/api/users',{
        data: {
            "name": "Albert",
            "job": "QA"
        }
    })

    expect(response.status()).toBe(201)
    
    const responseText = await response.text()
    expect(responseText).toContain('Albert')
    
    console.log(await response.json())
})

test('API PUT request', async({request}) => {
    const response = await request.put('https://reqres.in/api/users/2',{
        data: {
            "name": "Albert",
            "job": "QA"
        }
    })

    expect(response.status()).toBe(200)
    
    const responseText = await response.text()
    expect(responseText).toContain('Albert')
    
    console.log(await response.json())
})
import { test, expect } from "@playwright/test"

test('API Get request', async({request}) => {
    const response = await request.get('https://reqres.in/api/users/2')

    expect(response.status()).toBe(200)
    
    const responseText = await response.text()
    expect(responseText).toContain('Janet')
    
    console.log(await response.json())
})

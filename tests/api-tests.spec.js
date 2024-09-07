import { test, expect } from "@playwright/test"

test.describe.serial('User CRUD', () => {
    let userId
    let baseUrl = 'https://reqres.in/api'
    test('API GET request', async ({ request }) => {
        const response = await request.get(baseUrl + '/users/2')

        expect(response.status()).toBe(200)

        const responseText = await response.text()
        expect(responseText).toContain('Janet')

        console.log(await response.json())
    })

    test('API POST request', async ({ request }) => {
        const response = await request.post(baseUrl + '/api/users', {
            data: {
                "name": "Albert",
                "job": "QA"
            }
        })

        expect(response.status()).toBe(201)

        const responseText = await response.text()
        expect(responseText).toContain('Albert')

        const responseBody = JSON.parse(await response.text())
        console.log(responseBody)
        userId = responseBody.id
    })

    test('API PUT request', async ({ request }) => {
        const response = await request.put(baseUrl + '/users/' + userId, {
            data: {
                "name": "Trebla",
                "job": "AQ"
            }
        })

        expect(response.status()).toBe(200)

        const responseText = await response.text()
        expect(responseText).toContain('Trebla')

        console.log(await response.json())
    })

    test('API DELETE request', async ({ request }) => {
        const response = await request.delete(baseUrl + '/users/' + userId)
        expect(response.status()).toBe(204)
    })
})
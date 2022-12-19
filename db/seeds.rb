user =
  User.create!(
    email: "admin@example.com",
    password: "password",
    password_confirmation: "password",
    full_name: "Full Name",
    cpf_cnpj: "11222333444455"
  )

30.times do
  Product.create!(
    user:,
    description: Faker::Food.description,
    name: Faker::Food.dish,
    price: Faker::Number.number(digits: rand(4..6))
  )
end

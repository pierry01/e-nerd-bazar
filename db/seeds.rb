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
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    name: "Nome do produto",
    price: 10_000
  )
end

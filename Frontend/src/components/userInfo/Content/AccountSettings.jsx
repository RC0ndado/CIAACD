import React from 'react'; // Asegúrate de importar React
import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react';

function AccountSettings() {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <FormControl id="firstName">
        <FormLabel>Nombre</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="Tim" />
      </FormControl>
      <FormControl id="lastName">
        <FormLabel>Apellido</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="Cook" />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Teléfono</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="tel"
          placeholder="(408) 996–1010"
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder="tcook@apple.com"
        />
      </FormControl>
    </Grid>
  );
}

export default AccountSettings;

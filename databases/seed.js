/* eslint-env node */
import { faker } from '@faker-js/faker';
// or if you want locale-specific faker
import { fakerEN } from '@faker-js/faker';

import { createClient } from '@supabase/supabase-js';


const supabase = createClient( process.env.VITE_SUPABASE_URL, process.env.SERVICE_ROLE_KEY)

const seedProjects = async (numEntries) => {

    console.log("Supabase URL:", process.env.VITE_SUPABASE_URL);
    console.log("Service Role Key:", process.env.SERVICE_ROLE_KEY);

    for (let i=0; i < numEntries; i++) {
    const name = faker.lorem.word();
    const { data, error } = await supabase.from('projects').insert({
        name: name,
        slug: name.toLocaleLowerCase().replace(/ /g, '-'),
        status: faker.helpers.arrayElement(['in-prograss', 'completed']),
        collaborators: faker.helpers.arrayElement([1, 2, 3])  // wrapped in an array to match array format
    });

    if (error) {
        console.error("Error inserting data:", error.message);
    } else {
        console.log("Data inserted:", data);
    }
}
};



await seedProjects(10)




const seedTask = async (numEntries) => {

    console.log("Supabase URL:", process.env.VITE_SUPABASE_URL);
    console.log("Service Role Key:", process.env.SERVICE_ROLE_KEY);

    for (let i=0; i < numEntries; i++) {
    const name = faker.lorem.word();
    const { data, error } = await supabase.from('task').insert({
        name: name,
        slug: name.toLocaleLowerCase().replace(/ /g, '-'),
        status: faker.helpers.arrayElement(['in-prograss', 'completed']),
        collaborators: faker.helpers.arrayElement([1, 2, 3])  // wrapped in an array to match array format
    });

    if (error) {
        console.error("Error inserting data:", error.message);
    } else {
        console.log("Data inserted:", data);
    }
}
};



await seedProjects(10)


// const randomName = faker.person.fullName(); // Rowan Nikolaus
// const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
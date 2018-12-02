package br.edu.utfpr.jpa.heranca;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class AppTest_Heranca {

    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("SamplesJpaPU");
        EntityManager em = emf.createEntityManager();

        EntityTransaction tx = em.getTransaction();
        
        // Criar uma PessoaFisica
        Pessoa pf = new Fisica("Juca", "12345678");
        // Criar uma PessoaJuridica
        Pessoa pj = new Juridica("Maronesi", "123455555555555");

        tx.begin();
        em.persist(pf);
        em.persist(pj);
        tx.commit();

        em.close();
        emf.close();
    }
}

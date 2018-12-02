package br.edu.utfpr.jpa.embedded;

import java.util.Calendar;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class AppTest_Embedded {

    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("SamplesJpaPU");
        EntityManager em = emf.createEntityManager();

        EntityTransaction tx = em.getTransaction();

        // Criar um Endereco
        // Criar uma PessoaEmbedded
        // Adicinar o objeto Endereco no objeto PessoaEmbedded
        Endereco end = new Endereco();
        end.setLogradouro("Rua Argentina");
        end.setNumero("1234");
        
        PessoaEmbedded pes = new PessoaEmbedded("Juca");
        pes.setEndereco(end);

        tx.begin();
        em.persist(pes);
        tx.commit();

        em.close();
        emf.close();
    }
}

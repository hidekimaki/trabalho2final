package br.edu.utfpr.jpa.consulta.jpql;

import java.util.Calendar;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.NamedQuery;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

public class AppTest_JPQL {

    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("SamplesJpaPU");
        EntityManager em = emf.createEntityManager();

        EntityTransaction tx = em.getTransaction();
        tx.begin();

        String nomes[] = {"José", "Maria", "Alberto", "Francisco", "Ana", "Beatriz"};
        for (String nome : nomes) {
            PessoaJPQL p = new PessoaJPQL(nome);
            p.setNascimento(Calendar.getInstance());
            em.persist(p);
        }
        tx.commit();

        
        System.out.println(exTodasPessoasByQuery(em));
        
        System.out.println(exTodasPessoasByNamedQuery(em));
        
        System.out.println(exPessoasPorNomeByNamedQuery(em, "Ana"));
        
        System.out.println("Número de pessoas: " + exCountPessoas(em));

        em.close();
        emf.close();
    }

    // Consulta dinâmica
    public static List<PessoaJPQL> exTodasPessoasByQuery(EntityManager em) {
        Query q = em.createQuery("SELECT p FROM PessoaJPQL p");
        return q.getResultList();
    }

    public static List<PessoaJPQL> exTodasPessoasByNamedQuery(EntityManager em) {
        Query q = em.createNamedQuery("Pessoa.all");
        return q.getResultList();
    }

    public static List<PessoaJPQL> exPessoasPorNomeByNamedQuery(EntityManager em, String nome) {
        Query q = em.createNamedQuery("Pessoa.byName");
        q.setParameter("nome", nome);
        return q.getResultList();
    }

    public static long exCountPessoas(EntityManager em) {
        TypedQuery<Long> q = em.createNamedQuery("Pessoa.count", Long.class);
        return q.getSingleResult();
    }

}

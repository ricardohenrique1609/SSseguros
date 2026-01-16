// src/data/content.js

export const audienceCards = [
    {
        id: 'segurado', // Esse ID será usado na URL
        title: 'Para Segurados',
        description: 'Teve um sinistro negado ou mal conduzido? Entenda seus direitos.',
        icon: 'ShieldCheck',
        link: '/servicos/segurado', // Link novo
        // Dados novos para a página interna:
        heroTitle: 'Defesa Técnica para Segurados',
        heroDesc: 'Não aceite uma negativa sem entender os motivos técnicos. Atuamos para garantir que seu contrato seja respeitado.',
        features: [
            'Análise técnica de negativas de sinistro',
            'Revisão de valores de indenização',
            'Acompanhamento de vistorias',
            'Elaboração de parecer para reconsideração'
        ]
    },
    {
        id: 'corretor',
        title: 'Para Corretores',
        description: 'Ferramentas para defender seu cliente e destravar processos.',
        icon: 'Briefcase',
        link: '/servicos/corretor',
        heroTitle: 'Suporte Especializado para Corretores',
        heroDesc: 'Seu cliente teve um problema complexo? Oferecemos o embasamento técnico que falta para você argumentar com a seguradora.',
        features: [
            'Destravamento de processos parados',
            'Argumentação técnica baseada na SUSEP',
            'Consultoria preventiva para grandes riscos',
            'Treinamento sobre regulação de sinistros'
        ]
    },
    {
        id: 'advogado',
        title: 'Para Advogados',
        description: 'Subsídios técnicos, análise de nexo causal e pareceres.',
        icon: 'Scale',
        link: '/servicos/advogado',
        heroTitle: 'Assistência Técnica em Litígios',
        heroDesc: 'Transformamos a complexidade técnica dos seguros em argumentos claros para suas petições.',
        features: [
            'Pareceres técnicos para embasamento inicial',
            'Quesitos para perícia judicial',
            'Assistência técnica judicial',
            'Análise de nexo causal e cobertura'
        ]
    },
    {
        id: 'seguradora',
        title: 'Para Seguradoras',
        description: 'Consultoria para regulação e melhoria de processos.',
        icon: 'Building2',
        link: '/servicos/seguradora',
        heroTitle: 'Otimização de Processos de Sinistro',
        heroDesc: 'Visão imparcial e técnica para melhorar a regulação e reduzir o Custo Médio de Sinistro.',
        features: [
            'Auditoria de processos de regulação',
            'Treinamento de equipes de analistas',
            'Review de casos complexos',
            'Mediação de conflitos técnicos'
        ]
    }
];

export const checklists = {
    colisao: {
        title: 'Colisão de Veículos',
        items: [
            'Boletim de Ocorrência (B.O.)',
            'CNH do condutor no momento do sinistro',
            'CRLV (Documento) do veículo',
            'Fotos detalhadas dos danos e do local',
            'Relato detalhado do evento (Croqui)'
        ]
    },
    roubo: {
        title: 'Roubo ou Furto',
        items: [
            'Boletim de Ocorrência Policial',
            'Aviso de Sinistro imediato à Seguradora',
            'Nota Fiscal ou CRLV do bem',
            'Chaves reservas (se houver)'
        ]
    },
    residencial: { // Adicionei mais um exemplo para encher a tela
        title: 'Danos Elétricos (Residencial)',
        items: [
            'Laudo técnico do equipamento danificado',
            'Orçamento para reparo ou reposição',
            'Conta de luz do mês do evento',
            'Data e hora exata da oscilação de energia'
        ]
    }
};